import React from 'react';
import './TodoItemSummary.css';

const todoItemSummary = (props) => {

    const item = props.item;

    const itemTypes = props.itemTypes;
    const itemTypeOptions = itemTypes.map(t => {
        if (item.type === t) {
            return (
                <option key={t} value={t} selected="selected">{t}</option>
            )
        } else {
            return (
                <option key={t} value={t}>{t}</option>
            )
        }
    });

    return (

        <div className='TodoItemSummary'>

            <form>
                <label>内容：</label>
                <input 
                    value={props.item.content}
                    onChange={props.itemSummaryContentChanged}></input>
            </form>

            <form>
                <label>类别：</label>
                <select
                    onChange={props.itemSummaryTypeChanged}>
                    {itemTypeOptions}
                </select>
            </form>

            <button
                type="button"
                className="saveButton"
                onClick={() => props.saveClicked(props.item)}>确定</button>
            <button
                type="button" 
                className="cancelButton"
                onClick={() => props.cancelClicked()}>取消</button>
        </div>

    );

    
    // render () {
    //     const item = this.props.item;

    //     const itemTypes = this.props.itemTypes;
    //     const itemTypeOptions = itemTypes.map(t => {
    //         if (item.type === t) {
    //             return (
    //                 <option key={t} value={t} selected="selected">{t}</option>
    //             )
    //         } else {
    //             return (
    //                 <option key={t} value={t}>{t}</option>
    //             )
    //         }
    //     });

    //     return (
    //         <div className='TodoItemSummary'>

    //             <form>
    //                 <label>内容：</label>
    //                 <input 
    //                     value={this.props.item.content}
    //                     onChange={this.props.itemSummaryContentChanged}></input>
    //             </form>

    //             <form>
    //                 <label>类别：</label>
    //                 <select
    //                     onChange={this.props.itemSummaryTypeChanged}>
    //                     {itemTypeOptions}
    //                 </select>
    //             </form>

    //             <button
    //                 type="button"
    //                 className="saveButton"
    //                 onClick={() => this.props.saveClicked(this.props.item)}>确定</button>
    //             <button
    //                 type="button" 
    //                 className="cancelButton"
    //                 onClick={() => this.props.cancelClicked()}>取消</button>
    //         </div>
    //     )
    // }
};

export default todoItemSummary;