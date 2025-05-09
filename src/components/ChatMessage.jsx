import CodeBlock from "./CodeBlock";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text, onComplete]);

  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown>{displayedText}</ReactMarkdown>
    </div>
  );
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
};

const ChatMessage = ({ type = "user", text = "", isNewMessage = false }) => {
  const [animatedPartIdx, setAnimatedPartIdx] = useState(
    isNewMessage ? 0 : Infinity
  );

  const formatMessage = (message) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(message)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: message.slice(lastIndex, match.index),
        });
      }
      parts.push({
        type: "code",
        language: match[1]?.trim() || "javascript",
        content: match[2]?.trim() || "",
      });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < message.length) {
      parts.push({ type: "text", content: message.slice(lastIndex) });
    }
    return parts;
  };

  const messageParts = formatMessage(text);

  return (
    <div
      className={`${type} p-4 animate-fadeIn`}
      style={{
        direction: "ltr",
        unicodeBidi: "isolate",
      }}
    >
      {messageParts.map((part, index) => {
        if (part.type === "code") {
          // Code blocks always render immediately
          return (
            <CodeBlock
              key={index}
              code={part.content}
              language={part.language}
            />
          );
        }
        if (type === "responseMsg" && isNewMessage) {
          if (index < animatedPartIdx) {
            return (
              <div key={index} className="prose prose-invert max-w-none">
                <ReactMarkdown>{part.content}</ReactMarkdown>
              </div>
            );
          } else if (index === animatedPartIdx) {
            return (
              <TypingText
                key={index}
                text={part.content}
                onComplete={() => setAnimatedPartIdx((idx) => idx + 1)}
              />
            );
          } else {
            return null;
          }
        }
        return (
          <div key={index} className="prose prose-invert max-w-none">
            <ReactMarkdown>{part.content}</ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};

ChatMessage.propTypes = {
  type: PropTypes.oneOf(["user", "responseMsg"]).isRequired,
  text: PropTypes.string.isRequired,
  isNewMessage: PropTypes.bool,
};

export default ChatMessage;
