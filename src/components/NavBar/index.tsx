import React from 'react';
import { Menu, MenuProps } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PieChartOutlined, UserOutlined, HeatMapOutlined } from '@ant-design/icons';
import { Link, useLocation, Location } from 'react-router-dom';
import { getNavigationsValue } from '@ijl/cli'
import './NavBar.css';

const items: MenuProps['items'] = [
    {
        label: (<Link to={getNavigationsValue("cat.about")}>About</Link>),
        key: 'about',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("cat.accounts")}>Accounts</Link>),
        key: 'accounts',
        icon: <UserOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("cat.main")}>Home</Link>),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("cat.pairs")}>Pairs</Link>),
        key: 'pairs',
        icon: <PieChartOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("cat.tokens")}>Tokens</Link>),
        key: 'tokens',
        icon: <HeatMapOutlined />,
    },
];

function pathToMenuKey(location: Location): string {
    const split = location.pathname?.split('/')
    const rootIndex = split?.indexOf(getNavigationsValue("cat.root"))

    return ((!rootIndex && rootIndex !== 0) || rootIndex === -1 || !split[rootIndex + 1])  ? 'home' : split[rootIndex + 1];
}

function NavBar() {
    const location = useLocation();

    return <Menu selectedKeys={[pathToMenuKey(location)]} items={items} mode="horizontal" />
}

export default NavBar
export const exportedForTesting = { pathToMenuKey }