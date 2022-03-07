import "./styles/default.scss";
import Router from "./modules/Router";
import MainLayout from "./modules/MainLayout";
import { Provider, observer } from "mobx-react";
import HashtagStore from "./stores/tagsStore";
import { createServer, Model } from "miragejs";
import { HASHTAGS } from "./shared/constants";

createServer({
  models: {
    image: Model,
  },
  routes() {
    this.namespace = "api";
    this.get("/hashtags", () => HASHTAGS, { timing: 100 });
    this.post("/images", (schema, request): any => {
      console.info(request.requestBody);
      return request.requestBody;
    });
  },
});

const stores = { HashtagStore };
const App = observer(() => (
  <Provider {...stores}>
    <MainLayout>
      <Router />
    </MainLayout>
  </Provider>
));

export default App;
