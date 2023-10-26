import { useEffect, useState } from "react";
import { Topic } from "../store/types";
import { getTopics } from "../api/topics";

export function useTopics() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  
  return topics;
}