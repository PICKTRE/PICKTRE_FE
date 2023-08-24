import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const GoogleLoginRedirect = () => {
    const history = useHistory();

    useEffect(() => {
        // 서버에서 받은 사용자 정보나 JWT 등의 처리 작업
        // 이 예시에서는 로컬 스토리지에 사용자 정보를 저장하고 있음
        const userInfo = { username: 'example' };
        localStorage.setItem('user', JSON.stringify(userInfo));

        // 로그인이 완료되고 원래의 페이지로 리디렉션
        history.push('/home'); // 해당 페이지 경로로 수정
    }, [history]);

    return (
        <div>
            로그인 완료 처리 중...
        </div>
    );
};

export default GoogleLoginRedirect;