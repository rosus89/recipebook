import * as React from 'react';


function List({data,children}){

    let childKeys = Object.keys(children.props);
    let propKeys = Object.keys(data[0]);


    let list = data.map((item)=>
        {
            let generateProps = () =>{
                let newProps = {};
                for (let i = 0; i < childKeys.length; i++) {
                    newProps[childKeys[i]] = item[propKeys[i]];
                }
              return newProps
            }    
            return (
                React.cloneElement(children, {...generateProps(), key:item[propKeys[1]]}
                            ))
        }
    )
    return <>{list}</>
}
export default List;

