import {ChatEngine} from "react-chat-engine"


import './App.css';
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        projectID = '344febf6-328b-47b1-84ec-557d8f0f663c'
        userName='user_trial_1'
        userSecret='UserTrial1'
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
