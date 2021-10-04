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
  fontSize: '16px',
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
  width: '5%',
  textAlign: 'start',
};
const divSecStyle = {
  flexDirection: 'row',
  width: '35%',
  textAlign: 'start',
};
const divThirdStyle = {
  flexDirection: 'row',
  width: '35%',
  textAlign: 'start',
};
const divSecondStyle = {
  flexDirection: 'row',
  width: '25%',
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
  fontSize: '12px',
};
const textHStyle = {
  lineHeight: 1.25,
  margin: 0,
  color: 'rgb(83, 155, 245)',
  marginTop: '4px',
  marginBottom: '4px',
  fontFamily: 'Segoe UI',
  fontSize: '20px',
  fontWeight: 600,
};
const textHSubStyle = {
  width: 'auto',
  lineHeight: 1.25,
  margin: 0,
  color: '#768390',
  marginTop: '4px',
  marginBottom: '4px',
  fontFamily: 'Segoe UI',
  fontSize: '16px',
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
  width: '25%',
};
const tooltipText = {
  width: '75%',
};
const imageStyle = { width: 20, height: 20, borderRadius: 10, marginLeft: 5 };
const toolTipimageStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '25px',
  alignItems: 'center',
  margin: '0px',
};
let DevelopersItem = ({ article }) =>
  article
    ? article.map((el, key) => (
        <article style={articleStyle} key={key}>
          <div style={divStyle}>
            <p style={textStyle}>{el.rank}</p>
          </div>
          <div style={divSecStyle}>
            <a style={{ ...aStyle, ...textSubStyle, ...divToolStyle }}
                  href={el.url}
                >
                  <div style={tooltipImage}>
                    <img
                      src={el.avatar}
                      style={toolTipimageStyle}
                    />
                  </div>
                  <div style={tooltipText}>
                    <h3 style={textHStyle}>
                      {el.name}
                    </h3>
                    <p style={textHSubStyle}>{el.username}</p>
                  </div>
                </a>
          </div>
          <div style={divThirdStyle}>
            <div style={{...divStyle,...{ width: '100%'}}}>
                <p style={textStyle}>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" style={{...svgStyle,...{color: '#cc6b2c'}}}>
                    <path fill-rule="evenodd" d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"></path>
                </svg>
                POPULAR REPO</p>
            </div>
            <h1 style={textStyle}>
              <A style={aStyle} href={el.popularRepository.url} target="_blank">
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
                {el.popularRepository.repositoryName}
              </A>
            </h1>
            <p style={textStyle}>{el.popularRepository.description}</p>
          </div>
          <div style={divSecondStyle}>
            <button type="submit" style={buttonStyle}>
              Follow
            </button>
          </div>
        </article>
      ))
    : null;
const mapStateToProps = state => ({
  article: state.home ? state.home.developers : [],
});
DevelopersItem = connect(
  mapStateToProps,
  null,
)(DevelopersItem);
export default DevelopersItem;
