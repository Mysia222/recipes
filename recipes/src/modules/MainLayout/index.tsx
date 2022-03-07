import { Layout, Image } from "antd";
import logo from "../../images/logo.png";

const { Header, Footer, Content } = Layout;

const MainLayout = (props: any) => {
  return (
    <Layout>
      <Header className="header">
        <Image className="logo" preview={false} src={logo} />
      </Header>
      <Content className="content">{props.children}</Content>
      {/* <Footer className="footer">Recipes ©2021 Created by Julia</Footer> */}
    </Layout>
  );
};
export default MainLayout;
