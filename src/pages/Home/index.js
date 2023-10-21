import BarChart from "./components/BarChart"

const Home = () => {

    return (
        <div>
            <BarChart
                title={'三大框架满意度'}
                xData={['Vue', 'React', 'Augular']}
                sData={[20, 30, 70]}
            />
            <BarChart
                title={'三大框架使用度'}
                xData={['Vue', 'React', 'Augular']}
                sData={[50, 80, 20]}
                style={{ width: '500px', height: '400px' }}
            />
        </div >
    )
}

export default Home