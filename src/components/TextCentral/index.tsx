import { ImageAwards, Text } from './styles';
import imageAwards from '../../assets/imageblogsize.jpg';

export function TextCentral() {
    return (
        <Text>
            <p>Back in 2011, when Wolfgang was only two people we submitted some case studies to the 
            Digital Media Awards, optimistically entering the "Best Agency" category. At that time 
            nobody knew who we were and our clients were not of the "catwalk" variety. So we 
            certainly didn't expect to win, we optimistically hoped to get one of those cool "finalist" 
            badges for our email signatures. Lo and behold, the judges loved our case studies, scored 
            them strongly and we took the Gold Medal* home.

            This success imbued us with a wolfish hunger to execute outstanding campaigns and win 
            further domestic internacional awards.</p>
            <ImageAwards>
                <img src={imageAwards} alt="wolfgang digital winner awards" />
            </ImageAwards>
        </Text>
    )
}