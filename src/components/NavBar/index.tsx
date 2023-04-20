import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PieChartOutlined, UserOutlined, HeatMapOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link, useLocation, Location } from 'react-router-dom'

const items: MenuProps['items'] = [
    {
        label: (<Link to='/cat-project/about'>About</Link>),
        key: 'about',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (<Link to='/cat-project/account'>Account</Link>),
        key: 'account',
        icon: <UserOutlined />,
    },
    {
        label: (<Link to='/cat-project/'>Home</Link>),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to='/cat-project/pairs'>Pairs</Link>),
        key: 'pairs',
        icon: <PieChartOutlined />,
    },
    {
        label: (<Link to='/cat-project/tokens'>Tokens</Link>),
        key: 'tokens',
        icon: <HeatMapOutlined />,
    },
];

function pathToMenuKey(location: Location): string {
    const key = location.pathname.split('/')[2]
    return key.length === 0 ? 'home' : (key ?? "home");
}

function NavBar() {
    const location = useLocation();

    return <Menu selectedKeys={[pathToMenuKey(location)]} items={items} mode="horizontal" />
}

export default NavBar