import { IconType } from 'react-icons';
import { AiFillFileText } from 'react-icons/ai';
import { BiCoin, BiCoinStack } from 'react-icons/bi';
import { FaBitcoin, FaChartBar, FaChartLine, FaChartPie, FaCoins } from 'react-icons/fa';
import { GiCoinflip } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBagFill } from 'react-icons/ri';
import { RxStopwatch } from 'react-icons/rx';
import { Link, Location, useLocation } from 'react-router-dom';

function AdminSideBar() {
    const location = useLocation();
    return (
        <aside>
            <h2>Logo Admin</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                    <Li url="/admin/dashboard" text="Dashboard" location={location} icon={RiDashboardFill} />
                    <Li url="/admin/products" text="Products" location={location} icon={RiShoppingBagFill} />
                    <Li url="/admin/customers" text="Customers" location={location} icon={IoIosPeople} />
                    <Li url="/admin/transaction" text="Transaction" location={location} icon={AiFillFileText} />
                </ul>
            </div>
            <div>
                <h5>Charts</h5>
                <ul>
                    <Li url="/admin/chart/bar" text="Bar" location={location} icon={FaChartBar} />
                    <Li url="/admin/chart/pie" text="Pie" location={location} icon={FaChartPie} />
                    <Li url="/admin/chart/line" text="Line" location={location} icon={FaChartLine} />
                </ul>
            </div>
            <div>
                <h5>Apps</h5>
                <ul>
                    <Li url="/admin/app/coupun" text="Coupun" location={location} icon={RiCoupon3Fill} />
                    <Li url="/admin/app/stopwatch" text="Stopwatch" location={location} icon={RxStopwatch} />
                    <Li url="/admin/app/toss" text="Toss" location={location} icon={FaBitcoin} />
                </ul>
            </div>
        </aside>
    )
}

interface LiProps {
    url: string;
    text: string;
    location: Location;
    icon: IconType;
}

const Li = ({ url, text, location, icon: Icon }: LiProps) => {
    return (
        <li style={{ backgroundColor: location.pathname === url ? 'rgba(0, 115, 255, 0.1)' : 'transparent' }}>
            <Link to={url}><Icon />{text}</Link>
        </li>
    )
}


export default AdminSideBar