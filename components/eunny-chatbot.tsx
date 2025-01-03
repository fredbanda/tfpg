"use client";

import { useEffect } from 'react';

const ChatbaseChatbot = () => {
  useEffect(() => {

    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      // Initialize chatbase as a function or queue
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };

      // Create a proxy to handle dynamic properties
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop: string) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });

      // Append the script to the DOM
      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "sKLuRxfnOKKFHHrV-UdmB";
        script.dataset.domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    }
  }, []);

  return null;
};

export default ChatbaseChatbot;
