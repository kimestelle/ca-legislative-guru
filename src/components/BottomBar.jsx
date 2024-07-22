import EmailForm from './EmailForm'

const BottomBar = () => {
    return (
        <div className='bottom-bar flex flex-row'>
            <div className='flex'>
                <h6>
                Questions? Suggestions?
                </h6>
                <EmailForm/>
            </div>

            <div className='flex'>
            <h6>
                CA Legislative Guru
            </h6>
            </div>
        </div>
    )
}

export default BottomBar