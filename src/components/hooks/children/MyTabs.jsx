import { useState } from "react"

const MyTabs = (props) => {
    const ContentTab1 = () => {
        return (
            <div>
                You are at tab 1
            </div>
        )
    }
    const ContentTab2 = () => {
        return (
            <div>
                You are at tab 2
            </div>
        )
    }
    const ContentTab3 = () => {
        return (
            <div>
                You are at tab 3
            </div>
        )
    }

    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <>
            <div className="tabs">
                <span className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>Tab 1</span>
                <span className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>Tab 2</span>
                <span className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>Tab 3</span>
            </div>
            <div className="content">
                {activeTab === 'tab1' && <ContentTab1 />}
                {activeTab === 'tab2' && <ContentTab2 />}
                {activeTab === 'tab3' && <ContentTab3 />}
            </div>
        </>
    )
}
export default MyTabs;