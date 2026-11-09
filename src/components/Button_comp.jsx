import '../css/button.css'
export default function Button_comp({content,info}){

    let process=(()=>alert(info));


    return (

        <div className="button_comp">

            <button onClick={process}>{content}</button>

        </div>
    );
}