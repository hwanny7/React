import { Outlet } from 'react-router-dom';
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'


const Layout = () => {

    // isLogin 여부에 따라 render 또는 Login page로 보내기 => Login 후 그 전 페이지로 돌려 보내기
    // 페이지에 따라 footer를 보여줄지 말지 정하기

    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
            {/* 페이지에 따라서 Footer 적용여부 정하기 */}
        </div>
    );
};

export default Layout;