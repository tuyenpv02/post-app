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
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {posts?.map((element, idx) => (
                    <div className="col" key={idx}>
                        <div
                            className="card h-100"
                            style={{ height: "400px", display: "flex", flexDirection: "column" }}
                        >
                            <div className="card-body" style={{ flex: 1 }}>
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">
                                    {element.content} Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ut magnam optio repudiandae! Fugiat ipsam modi
                                    harum explicabo voluptate. Quia provident nobis perspiciatis!
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "auto",
                                }}
                            >
                                <Button size="large" type="text" icon={<LikeOutlined />}></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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
                                minHeight: 300,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Card
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        flex: 1,
                                    }}
                                >
                                    <Row justify="center" align="middle" style={{ flex: 1 }}>
                                        <Typography.Title>{element.title}</Typography.Title>
                                        <p>{element.content}</p>
                                    </Row>
                                    <Flex align="flex-end">
                                        <Button type="text" icon={<LikeOutlined />}>
                                            Search
                                        </Button>
                                    </Flex>
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
