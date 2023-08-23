interface LoadingProps {
    size: number
    type: 'clock' | 'atom'
    className: string
}
 
const LoadingIcon: React.FC<LoadingProps> = ({size, className, type}) => {
    return (
        <svg height={size} width={size} className={className} version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
            {type === 'atom' ? (
                <>
                    <circle fill="none" stroke="#fff" strokeWidth="4" cx="50" cy="50" r="44" style={{ opacity: 0.5 }} />
                    <circle strokeWidth="3" cx="8" cy="54" r="6">
                        <animateTransform attributeName="transform" dur="1.5s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite" />
                    </circle>
                </>
            ) : (
                <>
                    <circle fill="none" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48" />
                    <line fill="none" strokeLinecap="round" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                        <animateTransform attributeName="transform" dur="1s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                    </line>
                    <line fill="none" strokeLinecap="round" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                        <animateTransform attributeName="transform" dur="7.5s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                    </line>
                </>
            )}
        </svg>
    );
}
 
export default LoadingIcon;