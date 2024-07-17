import { Layout } from "antd";
import HeaderHome from "../../components/Header";
import { Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <HeaderHome />
                <Content style={{ padding: "60px 20px 20px 20px", marginTop: "64px" }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </div>
    );
};

export default HomePage;
