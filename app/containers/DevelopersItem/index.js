import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import A from '../../components/A';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%',
};
const articleStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  flex: '1',
  margin: '0 auto',
  color: 'olive',
  padding: '16px',
  marginTop: '-1px',
  listStyleType: 'none',
  borderTopColor: '#373e47',
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  fontFamily: 'Segoe UI',
};
const buttonStyle = {
  padding: '3px 12px',
  fontSize: '12px',
  lineHeight: '20px',
  color: '#adbac7',
  backgroundColor: '#373e47',
  borderRadius: '10px',
  borderColor: 'rgb(205 217 229 / 8%)',
};
const aStyle = {
  color: '#539bf5',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: '600',
  '&:hover': {
    background: '#539bf5 !important',
  },
};
const spanStyle = {
  fontWeight: '400',
};
const svgStyle = {
  color: '#768390',
  marginRight: '10px',
};
const svgBottomStyle = {
  color: '#768390',
  marginRight: '5px',
};
const divStyle = {
  flexDirection: 'row',
  width: '80%',
  textAlign: 'start',
};
const divSecondStyle = {
  flexDirection: 'row',
  width: '20%',
  textAlign: 'right',
};
const divToolStyle = {
  flexDirection: 'row',
  flex: '1',
  display: 'flex',
  marginLeft: '0px',
};
const textStyle = {
  lineHeight: 1.25,
  margin: 0,
  color: '#768390',
  marginTop: '4px',
  marginBottom: '4px',
  fontFamily: 'Segoe UI',
  fontSize: '14px',
};
const textSubStyle = {
  width: 'auto',
  lineHeight: 1.25,
  margin: 0,
  marginLeft: '20px',
  color: '#768390',
  marginTop: '4px',
  marginBottom: '4px',
  fontFamily: 'Segoe UI',
  fontSize: '12px',
};
const textItemFirst = {
  marginLeft: 0,
};
const tooltipImage = {
  width: '30%',
};
const tooltipText = {
  width: '65%',
  marginLeft: '5%',
};
const imageStyle = { width: 20, height: 20, borderRadius: 10, marginLeft: 5 };
const toolTipimageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '30px',
  alignItems: 'center',
  marginTop: '20px',
};
let DevelopersItem = ({ article }) =>
  article
    ? article.map((el, key) => (
        <article style={articleStyle} key={key}>
          <div style={divStyle}>
            <h1 style={textStyle}>
              <A style={aStyle} href={el.url} target="_blank">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  style={svgBottomStyle}
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  />
                </svg>
                <span style={spanStyle}>{el.username} / </span>
                {el.repositoryName}
              </A>
            </h1>
            <p style={textStyle}>{el.description}</p>
            <div style={divStyle}>
              <span style={{ ...textSubStyle, ...textItemFirst }}>
                {el.language}
              </span>
              <A
                style={{ ...aStyle, ...textSubStyle }}
                href={el.url}
                target="_blank"
              >
                <svg
                  aria-label="star"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  style={svgBottomStyle}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  />
                </svg>
                {el.totalStars}
              </A>
              <A
                style={{ ...aStyle, ...textSubStyle }}
                href={el.url}
                target="_blank"
              >
                <svg
                  aria-label="fork"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  style={svgStyle}
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  />
                </svg>
                {el.forks}
              </A>
              <span style={textSubStyle}>Built by</span>
              {el.builtBy.map((im, key1) => {
                return (
                  <a data-for={`so-close-${key}`} data-tip={key1}>
                    <img src={im.avatar} style={imageStyle} />
                  </a>
                );
              })}
            </div>
          </div>
          <ReactTooltip
            id={`so-close-${key}`}
            getContent={dataTip => {
              return (
                <a
                  style={{ ...aStyle, ...textSubStyle, ...divToolStyle }}
                  href={
                    el.builtBy[dataTip] ? el.builtBy[dataTip].url : '_blank'
                  }
                >
                  <div style={tooltipImage}>
                    <img
                      src={
                        el.builtBy[dataTip] ? el.builtBy[dataTip].avatar : ''
                      }
                      style={toolTipimageStyle}
                    />
                  </div>
                  <div style={tooltipText}>
                    <h3 style={textStyle}>
                      {el.builtBy[dataTip] ? el.builtBy[dataTip].username : ''}
                    </h3>
                    <p style={textSubStyle}>API missing for details</p>
                  </div>
                </a>
              );
            }}
            effect="solid"
            delayHide={500}
            delayShow={500}
            delayUpdate={500}
            place="top"
            border={true}
            backgroundColor="#2d333b"
            color="#444c56"
            borderColor="#444c56"
          />
          <div style={divSecondStyle}>
            <button type="submit" style={buttonStyle}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                style={svgStyle}
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>{' '}
              Star
            </button>
            <p style={{ ...textStyle, ...{ marginTop: '25px' } }}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                style={svgStyle}
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>{' '}
              {el.starsSince} stars {el.since === 'daily' ? 'today' : ''}
            </p>
          </div>
        </article>
      ))
    : null;
const mapStateToProps = state => ({
  article: state.home ? state.home.repositories : [],
});
DevelopersItem = connect(
  mapStateToProps,
  null,
)(DevelopersItem);
export default DevelopersItem;
