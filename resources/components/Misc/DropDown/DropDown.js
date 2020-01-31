import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from './style';
import Ripple from 'react-native-material-ripple';
import NestedScrollView from 'react-native-nested-scroll-view';

class Dropdown extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            show:false,
            value:props.header
        };
        this.show = this.show.bind(this);
        this.select = this.select.bind(this);
    }
    show()
    {
        this.setState({show:true});
    }
    select(value)
    {
        this.setState({value,show:false});
    }
    render()
    {
        if(!this.state.show)
            return(
                <Ripple style={[style.container,this.props.style]} onPress={this.show}>
                    <Text style={style.header}>{this.state.value}</Text>
                </Ripple>
            );
        else
            return(
                <View >
                    <NestedScrollView style={style.dropdown}>
                        {
                            this.props.content.map((elem,index)=>{
                                return <DropDownItem text={elem} key={`dropdown#${index}`} press={()=>this.select(elem)}/>;
                            })
                        }
                    </NestedScrollView>
                </View>
            );
    }  
};

const DropDownItem = (props)=>{
    return(
        <View>
            <Ripple style={style.dropItem} onPress={props.press}>
                <Text style={style.header}>{props.text}</Text>
            </Ripple>
        </View>
        
    );
};

export default Dropdown;