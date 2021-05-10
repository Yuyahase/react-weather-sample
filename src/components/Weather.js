import dayjs from 'dayjs';

function Weather({ results }) {
    const { country, cityName, temperature, conditionText, icon, humidity, localtime_epoch } = results
    console.log(localtime_epoch)
    console.log(dayjs(localtime_epoch).format('YYYY-MM-DD'))
    return (
        //padding: 1rem;
        <div className="p-1">
            {/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
            {/* border-radius: 0.75rem; */}
            <div className="bg-gradient-to-r 
            from-blue-500 to-blue-300
            w-96 h-72 m-auto rounded-xl shadow-2xl 
            transform hover:scale-120 transition-transform
            text-white relative">
                <div className="w-full px-8 absolute top-6">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-light">{country}</p>
                            <p className="text-lg font-medium tracking-widest">{cityName}</p>
                        </div>
                        {conditionText && <div><img src={icon} alt="icon"></img></div>}
                    </div>
                    <div className="pt-2">
                        <p className="font-light">Weather Condition</p>
                        <p className="text-lg font-medium tracking-widest">{conditionText}</p>
                    </div>
                    <div className="pt-3 pr-3">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-light text-base">Date</p>
                                <p className="font-bold tracking-more-wider text-base">{dayjs(localtime_epoch).format('YYYY-MM-DD')}</p>
                            </div>
                            <div>
                                <p className="font-light text-base">Temprature</p>
                                <p className="font-bold tracking-more-wider text-base">{temperature}</p>
                            </div>
                            <div>
                                <p className="font-light text-base">Humidity</p>
                                <p className="font-bold tracking-more-wider text-base">{humidity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather