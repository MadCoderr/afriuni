import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";


const ComposeFilter = (props) => {

    const [datas, setDatas] = React.useState([]);
    const [selectParent, setSelectParent] = React.useState(false);
    const [parent, setParent] = React.useState('');
    const [currentParentData, setCurrentParentData] = React.useState([]);

    const [queryData, setQueryData] = React.useState(null);

    React.useEffect(() => {
        setDatas(props.data);
    }, [props.data])

    React.useEffect(() => {
        if(props.onChange) props.onChange(queryData);
    }, [queryData])

    const onSelectParent = (slug) => {
        const parentData = datas.filter(order => (order.slug === slug));
        setCurrentParentData(parentData);
        setQueryData(slug);
        setParent(slug)
        setSelectParent(true);
    }

    const unSelectParent = () => {
        setParent('')
        setSelectParent(false)
    }

    const onSelectChild = (slug) => {
        setQueryData("")
        setQueryData(slug);
    }


    return <div className="relative">

        {!selectParent && (
            <div className="flex flex-col text-lg font-light space-y-1">
                {datas.map((data, index) => (
                    <label className="inline-flex items-center cursor-pointer" key={index}>
                        <input type="checkbox" value={data.slug} checked={parent === data.slug} onChange={() => onSelectParent(data.slug)} className="rounded border-gray-300 shadow-sm focus:border-0 focus:ring-0"/>
                        <span className="ml-2">{data.name} <span className="text-sm text-gray-400">({data.count})</span></span>
                    </label>
                ))}
            </div>
        )}

        {selectParent && (
            <div className="bg-white flex flex-col text-lg font-light space-y-1">
                {/*subList*/}
                <div className="flex items-center space-x-2 text-custom-primary font-normal mb-3 cursor-pointer" onClick={unSelectParent}>
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-base" /> <span>{props.backTitle}</span>
                </div>
                <div className="">
                    <div className={`capitalize cursor-pointer ${queryData === currentParentData[0].slug ? "font-normal" : ""}`} onClick={() => onSelectParent(currentParentData[0].slug)}>
                        {currentParentData[0].name} <span className="text-sm text-gray-400">({currentParentData[0].count})</span>
                    </div>

                    <div className="pl-3 flex flex-col text-lg font-light space-y-1 mt-3">
                        {currentParentData[0].children.map((data, index) => (
                            <label className={`inline-flex items-center cursor-pointer ${queryData === data.slug ? "font-normal" : ""}`} key={index}>
                                <input type="checkbox" value={data.slug} checked={queryData === data.slug}  onChange={() => onSelectChild(data.slug)}  className="rounded border-gray-300 shadow-sm focus:border-0 focus:ring-0"/>
                                <span className="ml-2">{data.name} <span className="text-sm text-gray-400">({data.count})</span></span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        )}

    </div>
}

export default ComposeFilter;