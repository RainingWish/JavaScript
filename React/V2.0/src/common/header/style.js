import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper  = styled.div`
    position:relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo =  styled.div`
    position: absolute;
    top :2px;
    left:0;
    display: block;
    height: 56px;
    width:130px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-right: 50px;
    box-sizing: border-box;
    height: 100%;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding:0 10px;
    font-size = 17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color:rgb(0,140,255);
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float:left;
    width: 200 px;
    height:50%;
    margin-top: 0 px;
    margin-left:20px;
    .iconfont{
        position: absolute;
        right: 4px;
        bottom: -13px;
        width: 26px;
        line-height: 26px;
        border-radius: 13px;
        text-align: center;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'Searching'
})`
    width: 160 px;
    height:100%;
    padding: 0 20px;
    margin-top: 14px;
    margin-left:20px;
    box-sizing: border-box;
    border: none;
    outline:none;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    background: #eee;
    font-size = 14 px;
    color: #666;
    &::placeholder{
        color:#999;
    }
`
export const SearchInfo = styled.div`
position: absolute;
left: 15px;
right: 0;
top: 56px;
width:200px;
padding:0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background: white;
`

export const SearchInfoTitle = styled.div`
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color:#969696;
`

export const SearchSwicth = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`

export const SearchInfoList = styled.div`
    overflow hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    width: 25%;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right:20px;
    padding: 0 15px;
    line-height:36px;
    border-top-left-radius: 19px;
    border-bottom-left-radius: 19px;
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.mp{
        color:#ec6149;
    }
    &.wp{
        color:#fff;
        background: #ec6149;
    }
`
