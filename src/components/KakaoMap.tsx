import { useEffect } from "react";
import { styled } from "styled-components";


const StyledKakaoMap = styled.div`
    width: 30vw;
    height: 30vw;
    background-color: aliceblue;
`;

const KakaoMap = () => {

    useEffect(() => {
        const SEOULSTATION = [37.55469055099156, 126.97060351762752];
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(SEOULSTATION[0], SEOULSTATION[1]), //지도의 중심좌표.
            level: 10 //지도의 레벨(확대, 축소 정도)
        };

        const markerPosition = new window.kakao.maps.LatLng(SEOULSTATION[0], SEOULSTATION[1]);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        marker.setMap(map);
    }, [])

    return (
        <StyledKakaoMap id="map">
        </StyledKakaoMap>
    );
}
export default KakaoMap;