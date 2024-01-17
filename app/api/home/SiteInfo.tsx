"use client"
import {useState,useEffect} from "react";
import counties from  "../../../public/ubike.json";
import cityData from "../../../public/CityCountyData.json";
import frameImg from "../../../public/Frame.png";
function SiteInfo(){
    // cityData[0].AreaList.map((area,id)=>{
    //     console.log(id)
    // });
    const [selectedCity,setSelectedCity] = useState("");
    const [tableDisplay,setTableDisplay] = useState({
        display:"none",
    })
    const [areaList,setAreaList] = useState([]);
    const [ubikedata, setUbikeData] =useState([]);
    const [selectedArea,setSelectedArea] = useState({});
    const [areaBox, setAreaBox] = useState([]);

    useEffect(()=>{
        console.log(ubikedata);
    },[ubikedata]);
    useEffect(()=>{
        areaChange("全部勾選");
    },[selectedCity])
    function cityChange (city:any){
        setSelectedCity(city);
        let newObj:any = {};
        let newData:any = [];
        if(city==="--請選擇縣市--"){
            setUbikeData([]);
            setAreaBox([]);
            setTableDisplay({display:"none"});
        }
        if(city==="台北市")
        {
            cityData[0].AreaList.map((city,id)=>{

            newObj[city.AreaName]=false;
            });
            setAreaBox(cityData[0].AreaList);
            console.log(cityData[0].AreaList[0].AreaName);
            newData = counties.filter((ubike)=>{
                ubike.sarea === cityData[0].AreaList[0].AreaName;
            })
            console.log(newData);
            console.log(counties);
            setTableDisplay({display:"table"});
            areaChange("全部勾選");
        }
        if( city =="新竹市"){
            cityData[6].AreaList.map((city,id)=>{
                newObj[city.AreaName]=false;
                });
            setAreaBox(cityData[6].AreaList);
            setUbikeData([]);
            setTableDisplay({display:"table"});
            
        }
        if(city=="新北市"){
            cityData[2].AreaList.map((city,id)=>{
                newObj[city.AreaName]=false;
                });
            setAreaBox(cityData[2].AreaList);
            console.log(cityData[2].AreaList[0].AreaName);
            setUbikeData([]);
            setTableDisplay({display:"table"});
        }
        if(city=="台中市"){
            cityData[10].AreaList.map((city,id)=>{
                newObj[city.AreaName]=false;
                });
            setAreaBox(cityData[10].AreaList);
            console.log(cityData[10].AreaList[0].AreaName);
            setUbikeData([]);
            setTableDisplay({display:"table"});
        }
        console.log(newObj);
        setSelectedArea({...newObj});
        console.log(selectedArea);
    }
    function areaChange(checkarea){     
            let newObj = Object.assign([],selectedArea);
            console.log(newObj);
            //newObj[e.target.value] = !newObj[e.target.value];
            let newdata = [];
            let allUbikeData = [];
            let isAllChecked = null;
            if(checkarea ==="全部勾選"){
                isAllChecked = document.getElementById("Areaall");
                console.log("success");
                console.log(isAllChecked);
                if(isAllChecked.checked === true){
                    Object.keys(newObj).forEach((key)=>{
                        let areaElement = document.getElementById("checkbox"+key)as HTMLInputElement;
                        areaElement.checked = true;
                    });
                }
                else{
                    Object.keys(newObj).forEach((key)=>{
                        let areaElement = document.getElementById("checkbox"+key)as HTMLInputElement;
                        areaElement.checked = false;
                    });
                }
            }
            Object.keys(newObj).forEach((key)=>{
                //判斷是否為全部選取
                let areaElement = document.getElementById("checkbox"+key) as HTMLInputElement;
                if(areaElement.checked === true)
                {
                    newdata = counties.filter((ubike)=>
                    ubike.sarea ===key
                    );
                    allUbikeData=[...allUbikeData,...newdata];
                }
                else{
                    isAllChecked = document.getElementById("Areaall");
                    isAllChecked.checked = false;
                }   
                setUbikeData([...allUbikeData]);
            })
        }
            //console.log(newObj);
            //seting a new Ubike Data for the area Key
            
            // let newdata =[];
            // Object.keys(newObj).forEach((key)=>{
            //     if(newObj[key]=== true){
            //          newdata = counties.filter((ubike)=>
            //             ubike.sarea ===key
            //         );
            //         let ReallyCheck = document.getElementById("checkbox"+key);
            //         ReallyCheck.checked = true;
            //     }
            //     else{
            //         let OtherDeleteCheck =document.getElementById("checkbox"+key);
            //         OtherDeleteCheck.checked=false;
            //     }
            //     setUbikeData([...newdata]);
            // })
        //     setSelectedArea(newObj);     
        // }
        function SearchKeyWord(input:string){
            let searchInput = document.querySelector('.searchInput') as HTMLInputElement | null;
            let keyword = searchInput.value.trim().toLowerCase();
            console.log(keyword);
            let newdata = [];

            newdata=ubikedata.filter(ubike=>{
                let ubikeText = (ubike.sna+ubike.ar+ubike.snaen+ubike.aren).trim().toLowerCase();
                console.log(ubikeText);
                return (ubikeText.match(keyword));
            })
            console.log(newdata);
            setUbikeData([...newdata]);
            
        }
    return(
        <div className="InfoBox container">
            <div className="title fc-primary">站點資訊</div>
            <div className="Form">
                <div className="box">
                    <select className="selectCity" defaultValue="--請選擇縣市--" onChange={(e)=>{cityChange(e.target.value);}} >
                        <option>--請選擇縣市--</option>
                        <option>台北市</option>
                        <option>新北市</option>
                        <option>新竹市</option>
                        <option>台中市</option>
                    </select>
                    <input className="searchInput" id="searchInput" placeholder="搜尋站點" aria-label="Search"></input>
                    <button className="search-btn" id="searchBtn" onClick={(e)=>{SearchKeyWord((e.target as HTMLInputElement).value);}}>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </span>
                    </button>
                 </div>
                 <div className="row areaRow">
                    <div className="col-6 CheckBoxArea">
                        <div className="row">
                            <div className="col-12" style={tableDisplay}>
                                <div className="form-check areaCheckBox" >
                                        <input  className="form-check-input"  type="checkbox" value="全部勾選" id="Areaall"  onChange={(e)=>{areaChange(e.target.value)}}/>
                                        全部勾選
                                        <label className="form-check-label" htmlFor="Areaall"></label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                    {areaBox.map((city,id)=>(
                        <div className="col-3" key={city.AreaName}>
                            <div className="form-check areaCheckBox" >
                                <input  className="form-check-input"  type="checkbox" value={city.AreaName} id={"checkbox"+city.AreaName}  onChange={(e)=>{areaChange(e.target.value)}}/>
                                {city.AreaName}
                                <label className="form-check-label" htmlFor={"checkbox"+city.AreaName}></label>
                            </div>
                        </div>
                        ))}
                            </div>
                        </div>
                    <div className="col-6 ubikePicsCol">
                        <img className="frameImg" src="/Frame.png"  width={95}  height={95} alt="no pics"></img>
                    </div>
                 </div>


                <div className="table" style={tableDisplay} >
                    <div className="row headrow">
                        <div className="col headcol">縣市</div>
                        <div className="col headcol">區域</div>
                        <div className="col-6 headcol">站點名稱</div>
                        <div className="col headcol mobilecol" >可借車輛</div>
                        <div className="col headcol mobilecol">可還空位</div>                        
                    </div>
                    {
                        ubikedata.map((site,id)=>(
                            <div className="row contentrow" key={id}>
                                <div className="col contentcol">台北市</div>
                                <div className="col contentcol">{site.sarea}</div>
                                <div className="col-6 contentcol">{site.sna}</div>
                                <div className="col contentcol mobilecol">{site.sbi}</div>
                                <div className="col contentcol mobilecol">{parseInt(site.tot,10)-parseInt(site.sbi,10)}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
export default SiteInfo;
