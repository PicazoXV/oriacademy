export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ChatState = {
  isOpen: boolean;
  messages: ChatMessage[];
  isStreaming: boolean;
  error: string | null;
  hasBeenOpened: boolean;
};

export type ChatAction =
  | { type: "TOGGLE_OPEN" }
  | { type: "CLOSE" }
  | { type: "ADD_USER_MESSAGE"; content: string }
  | { type: "START_STREAMING" }
  | { type: "APPEND_STREAM_CHUNK"; content: string }
  | { type: "FINISH_STREAMING" }
  | { type: "SET_ERROR"; error: string }
  | { type: "CLEAR_ERROR" };

export type ChatApiRequest = {
  messages: { role: ChatRole; content: string }[];
};
