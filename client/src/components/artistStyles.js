export const artistName = styled.div`
  font: 14px "Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Verdana,Tahoma,sans-serif;
  color: #333;
  margin-bottom: 10px;
  margin-top: 5px;
  cursor: pointer;
`;

export const avatarPic = styled.img`
height: 120px;
width: 120px;
border-radius: 50%;
box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
text-align: center;

background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
cursor: pointer;
object-fit: cover;
`;

export const artistWidget = styled.div`
float: left;
width: 100%;
height: 100%;
padding: 0 20px;
min-width: 120px;
font: 14px "Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Verdana,Tahoma,sans-serif;
color: #333;
display: block;
margin: 0 1%;
flex-basis: 12%;
`;

export const followAndTrackCount = styled.div`
  color: #999;
  font-size: 11px;
  line-height: 12px;
  margin-bottom:10px;
  `;

export const ArtistFollowBadge = styled.span`
    color: #999;
    padding-right: 5px;
    cursor: pointer;
    margin-right: 3px;
    &:hover {
      color: #666
    }
    `;

export const ArtistTrackBadge = styled.span`
    color: #999;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      color: #666
    }
    `;
export const reportButton = styled.div`
    font-size: 10px;
    color: #666;
    cursor: pointer;
    margin-top: 30px;
    &:hover {
      color:#333;
      cursor: pointer;
  }
  `;
