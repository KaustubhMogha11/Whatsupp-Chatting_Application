import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TempelateProvider";
import UserProvider from "./context/UserProvider";
function App() {
  return (
    <div>
      <UserProvider>
        <TemplateProvider>
          <AccountProvider>

            <Messenger />


          </AccountProvider>

        </TemplateProvider>

      </UserProvider>


    </div>
  );
}

export default App;
