import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph, Text, Link } = Typography;


export default function About () {
    return (
        <>
            <Typography>
               <Title>About</Title>

               <Paragraph>
                    TODO: write something about the protocol we're tracking and about the data and how we get it (if we had enough time)
               </Paragraph>
            </Typography>
        </>
    );
}