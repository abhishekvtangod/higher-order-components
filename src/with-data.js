import React from 'react';

const withData = (WrappedComponent,dataSource) => {
    class WithData extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                data:[]
            }
        }
        componentDidMount(){
            setTimeout(()=>{
                fetch(dataSource)
                .then(res => res.json())
                .then(data => this.setState({
                    data:data.slice(0,3)
                }));
            },1500);
        }
        render(){
            return(
                this.state.data.length < 1 ? <h1>Loading</h1> :
                <WrappedComponent data={this.state.data} {...this.props}/>
            )
        }
    }

    return WithData;
}

export default withData;