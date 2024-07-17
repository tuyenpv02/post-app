import { useEffect, useState } from "react";
import { Button, Card, Col, Flex, Image, Row, Space, Typography } from "antd";
import { LikeOutlined, StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

function BodyLeft() {
    const [posts, setPosts] = useState([
        {
            id: 3,
            title: "Đánh giá sản A",
            content: "lorem 20",
            userID: 1,
            status: 1,
        },
    ]);

    const fetchPosts = async () => {
        fetch("http://localhost:5000/posts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts([...data]);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <Space
                direction="vertical"
                size="middle"
                style={{
                    display: "flex",
                }}
            >
                <Row gutter={[20, 20]}>
                    {posts?.map((element, idx) => (
                        <Col
                            span={8}
                            key={idx}
                            style={{
                                height: 300,
                            }}
                        >
                            <Card
                                style={{
                                    height: "100%",
                                }}
                            >
                                <div style={{ backgroundColor: "coral", height: "200" }}>
                                    <Row justify="center" align="top">
                                        <Typography.Title>{element.title}</Typography.Title>
                                        <p>{element.content}</p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Temporibus asperiores commodi qui animi deserunt
                                            voluptate est delectus reiciendis alias molestias dolor
                                            incidunt iste corporis laboriosam ut quis fugiat, fugit
                                            exercitationem!
                                        </p>
                                    </Row>
                                    <Row justify="space-between" align="bottom">
                                        <Button type="text" icon={<LikeOutlined />}>
                                            Search
                                        </Button>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Space>
        </>
    );
}

export default BodyLeft;
