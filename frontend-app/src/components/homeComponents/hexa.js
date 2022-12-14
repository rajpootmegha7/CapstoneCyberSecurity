import React, { Component, Fragment } from 'react'
import './style.css'
import planning from '../../images/planning.png'
import supply from '../../images/supplying.png'
import inventory from '../../images/inventory_management.png'
import delivery from '../../images/delivery.png'
import customer from '../../images/customer_support.png'
import manufacturing from '../../images/manufacturing.png'


import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Badge } from 'primereact/badge';


export default class Hexa extends Component {
    constructor(props) {
      super(props)
      this.state = {
        position: 'center',
        displayResponsive: false,
        riskData: [],
        mitigationData: [],
      }
    
      this.setHexaObject = this.setHexaObject.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
      this.setDataForDialog = this.setDataForDialog.bind(this);
      this.getContentData = this.getContentData.bind(this)
    //   console.log('and this here')
    }

    setHexaObject = (imgname) => {
        switch(imgname) {
            case 'planning':
              return(<img className='hexa-img' src={planning} alt='planning'/>)
            case 'supply':
                return(<img className='hexa-img' src={supply} alt='supply'/>)
            case 'inventory':
                return(<img className='hexa-img' src={inventory} alt='inventory'/>)
            case 'delivery':
                return(<img className='hexa-img' src={delivery} alt='delivery'/>)
            case 'manufacturing':
                return(<img className='hexa-img' src={manufacturing} alt='manufacturing'/>)
            default:
                return(<img className='hexa-img' src={customer} alt='customer'/>)
        }
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };
        if (position) {
            state = {
                ...state,
                position
            }
        }
        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
        this.setState({riskData: [], mitigationData: [],});
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Close" onClick={() => this.onHide(name)} autoFocus />
            </div>
        );
    }

    setDataForDialog = (pcontentData) => {
        console.log('Inside Risk Hexa', pcontentData)
        return(
            <ul>
                {pcontentData.map((item, counter) => {
                    return(
                        <li>
                        <div className='data_container'>
                            {/* <p key={counter + 1}> {item.split("Link-")[0]} </p> */}
                            <p key={counter + 1}>
                                {item.split("Link-")[0]}
                                {item.split("Link-").length > 1 ? 
                                <a className='data_link' href={item.split("Link-")[1]} target="_blank" rel="noreferrer">
                                    [Link]
                                </a>
                                :
                                null
                                }
                            </p>
                        </div>
                        </li>
                    )
                })}
            </ul>
        )   
    }

    setMitigationData = (pcontentData) => {
        console.log('Inside Mitigation Hexa', pcontentData)
        return(
            <ul>
                {pcontentData.map(item => {
                    return <li key="{item}" >{item}</li>
                })}
            </ul>
        )     
    }

    getContentData = (pname) => {
        if( this.props.ptype === null) {
            alert('Select the Supply Chain Type');
            return;
        }
        console.log('pcontentData ', pname, 'type ', this.props.ptype)
        var temp_risks = []
        var temp_mitigations = []

        // Post request to get the data from server
        var req_data = {'supply_type': this.props.ptype, 'suppy_name': pname.replace(/\s/g, '')}
        var request = new Request('http://localhost:4000/test/getSupplyData', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(req_data)
        });

        console.log(request);
        var that = this;
        fetch(request)
            .then(function (response) {
                console.log('request sent')
                // check the response of the backend error code
                if (response.status === 401) throw new Error('Email or password not found');
                else if (response.status === 403) throw new Error('User is already exist');
                else if (response.status === 404) throw new Error('Not found');
                
                response.json().then(function (resdata) {
                    console.log('request being unpacked')
                    const data_obj = resdata.data
                    //Setting the token in the local storage in order to use it further.
                    data_obj["Risks"].map(item => {
                        console.log('item ', item)
                        temp_risks.push(item);
                    })

                    data_obj["Mitigations"].map(item => {
                        console.log('item ', item)
                        temp_mitigations.push(item);
                    })

                    that.setState({displayResponsive: true, riskData: temp_risks, mitigationData: temp_mitigations})
                });
            })
            .catch(function (err) {
                console.log(err.message);
            });
        
        
    }
  render() {
      
      const supply_type = this.props.ptype
      const img_name = this.props.pimage
      const pname = this.props.pname
      const step = this.props.step
      const pcolor = {"--c": this.props.pcolor, 'opacity': '0.8'}
      console.log('hexa rendered!',pname)
      
    return (
       
    <div className='hexa-container'>
      <div className='hexa-card'>
        <div className='inner-content'>
            <div className='top-card' style={pcolor}></div>
            <div className='mid-card' style={pcolor}>
                {this.setHexaObject(img_name)}
            </div>
            <div className='bottom-card' style={pcolor}></div>
        </div>
        <Badge className='badge-step' value={step} size="large"></Badge>
        <Button className='p-button-outlined p-button-secondary card-label' onClick={()=>this.getContentData(pname)} >{pname}</Button>
        
        <Dialog header={pname} visible={this.state.displayResponsive} onHide={() => this.onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={this.renderFooter('displayResponsive')}>
            <div className='p-content-card'>
                <TabView>
                    <TabPanel header="Risks">
                        {this.state.riskData.length !== 0 ? this.setDataForDialog(this.state.riskData): <p>No Data</p>}
                    </TabPanel>
                    <TabPanel header="Mitigations">
                    {this.state.mitigationData.length !== 0 ? this.setDataForDialog(this.state.mitigationData): <p>No Data</p>}
                    </TabPanel>
                </TabView>
            </div>
        </Dialog>
      </div>
      
    </div>    
    )
  }
}

