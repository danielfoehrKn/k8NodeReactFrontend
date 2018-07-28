import React from 'react'
import   {Parallax} from 'react-materialize'
class ButtonParallax extends React.Component {

    render() {
        const filepath= this.props.picture;
        const title= this.props.title;
        const description= this.props.description;
        const buttonDescription= this.props.buttonDescription;
        const link= this.props.buttonLink;
        return (

            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br/>
                        <h1 className="header center teal-text text-lighten-2">{title}</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">{description}</h5>
                        </div>
                        <div className="row center">
                            <a href={link} id="download-button" className="btn-large waves-effect waves-light teal lighten-1">{buttonDescription}</a>
                        </div>
                        <br/>
                    </div>
                </div>
                <Parallax className="parallax" imageSrc={filepath}/>
                {/*<div className="parallax"><img src={filepath}/></div>*/}
            </div>
    );
    }
}

module.exports = ButtonParallax;

{/*<div className="parallax-container">*/}
    {/*<div className="parallax"><img src={filepath}/></div>*/}
{/*</div>*/}


