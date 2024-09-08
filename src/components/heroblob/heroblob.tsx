import styles from "./heroblob.module.css"

const HeroBlob = () => (
    <div className="relative overflow-visible bg-background">

        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='100%' height='100%' viewBox='0 0 500 500' className={styles.blob__svg}>
            <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop className={styles.stopo} offset='0%'></stop>
                    <stop className={styles.stopb} offset='100%'></stop>
                </linearGradient>
            </defs>
            <path fill='url(#gradient)'>
                <animate attributeName='d' dur='100' repeatCount='indefinite'
                    values='M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z;
      M420.5,306.5Q406,363,360,405Q314,447,257.5,423.5Q201,400,162.5,371Q124,342,62.5,296Q1,250,32.5,182.5Q64,115,132.5,106.5Q201,98,257.5,75Q314,52,380.5,79.5Q447,107,441,178.5Q435,250,420.5,306.5Z;                                M417.5,307.5Q408,365,362,409Q316,453,259,425.5Q202,398,156,374.5Q110,351,74,300.5Q38,250,75.5,200.5Q113,151,158,128.5Q203,106,251.5,100.5Q300,95,344,122.5Q388,150,407.5,200Q427,250,417.5,307.5Z;    
      M436.71733,302.40152Q393.88114,354.80305,352.19524,394.88114Q310.50933,434.95924,247.62648,442.75638Q184.74362,450.55352,146.58743,401.56114Q108.43124,352.56876,97.13924,301.28438Q85.84724,250,91.18762,194.22495Q96.528,138.4499,147.01867,113.20457Q197.50933,87.95924,253.06876,78.53733Q308.62819,69.11543,363.60952,98.18419Q418.59086,127.25295,449.07219,188.62648Q479.55352,250,436.71733,302.40152Z;
      M401,296Q377,342,341,380Q305,418,250.5,417.5Q196,417,135.5,397Q75,377,55.5,313.5Q36,250,63,191.5Q90,133,133,78Q176,23,236.5,64.5Q297,106,352.5,120.5Q408,135,416.5,192.5Q425,250,401,296Z;
      M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z
      '></animate>
            </path>
        </svg>

        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='100%' height='100%' viewBox='0 0 500 500' className='blob__svg'>
            <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop id='stopo' offset='0%'></stop>
                    <stop id='stopb' offset='100%'></stop>
                </linearGradient>
            </defs>
            <mask id="mask">
                <path fill='#fff'>
                    <animate attributeName='d' dur='100' repeatCount='indefinite'
                        values='M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z;
             M420.5,306.5Q406,363,360,405Q314,447,257.5,423.5Q201,400,162.5,371Q124,342,62.5,296Q1,250,32.5,182.5Q64,115,132.5,106.5Q201,98,257.5,75Q314,52,380.5,79.5Q447,107,441,178.5Q435,250,420.5,306.5Z;                                M417.5,307.5Q408,365,362,409Q316,453,259,425.5Q202,398,156,374.5Q110,351,74,300.5Q38,250,75.5,200.5Q113,151,158,128.5Q203,106,251.5,100.5Q300,95,344,122.5Q388,150,407.5,200Q427,250,417.5,307.5Z;    
             M436.71733,302.40152Q393.88114,354.80305,352.19524,394.88114Q310.50933,434.95924,247.62648,442.75638Q184.74362,450.55352,146.58743,401.56114Q108.43124,352.56876,97.13924,301.28438Q85.84724,250,91.18762,194.22495Q96.528,138.4499,147.01867,113.20457Q197.50933,87.95924,253.06876,78.53733Q308.62819,69.11543,363.60952,98.18419Q418.59086,127.25295,449.07219,188.62648Q479.55352,250,436.71733,302.40152Z;
             M401,296Q377,342,341,380Q305,418,250.5,417.5Q196,417,135.5,397Q75,377,55.5,313.5Q36,250,63,191.5Q90,133,133,78Q176,23,236.5,64.5Q297,106,352.5,120.5Q408,135,416.5,192.5Q425,250,401,296Z;
             M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z
             '></animate>
                </path>
            </mask>
            <path fill='url(#gradient)'>
                <animate attributeName='d' dur='100' repeatCount='indefinite'
                    values='M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z;
      M420.5,306.5Q406,363,360,405Q314,447,257.5,423.5Q201,400,162.5,371Q124,342,62.5,296Q1,250,32.5,182.5Q64,115,132.5,106.5Q201,98,257.5,75Q314,52,380.5,79.5Q447,107,441,178.5Q435,250,420.5,306.5Z;                                M417.5,307.5Q408,365,362,409Q316,453,259,425.5Q202,398,156,374.5Q110,351,74,300.5Q38,250,75.5,200.5Q113,151,158,128.5Q203,106,251.5,100.5Q300,95,344,122.5Q388,150,407.5,200Q427,250,417.5,307.5Z;    
      M436.71733,302.40152Q393.88114,354.80305,352.19524,394.88114Q310.50933,434.95924,247.62648,442.75638Q184.74362,450.55352,146.58743,401.56114Q108.43124,352.56876,97.13924,301.28438Q85.84724,250,91.18762,194.22495Q96.528,138.4499,147.01867,113.20457Q197.50933,87.95924,253.06876,78.53733Q308.62819,69.11543,363.60952,98.18419Q418.59086,127.25295,449.07219,188.62648Q479.55352,250,436.71733,302.40152Z;
      M401,296Q377,342,341,380Q305,418,250.5,417.5Q196,417,135.5,397Q75,377,55.5,313.5Q36,250,63,191.5Q90,133,133,78Q176,23,236.5,64.5Q297,106,352.5,120.5Q408,135,416.5,192.5Q425,250,401,296Z;
      M430.5,295.5Q375,341,345,395Q315,449,254.5,436Q194,423,148,390Q102,357,59,303.5Q16,250,58.5,196Q101,142,144,99Q187,56,246,68.5Q305,81,357.5,107.5Q410,134,448,192Q486,250,430.5,295.5Z
      '></animate>
            </path>
            <image mask="url(#mask)" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/images/profile-picture.png" width="400" height="400" x='30' y='105' />
        </svg>

    </div>
)

export default HeroBlob