import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from '../../components/Headers/LargeHeader';
import SmallHeader from '../../components/Headers/SmallHeader';

const Trending = () =>{
    return(
        <IonPage>
            <SmallHeader title="Newsy"/>
            <IonContent fullscreen>
                <LargeHeader title="Newsy"/>
            </IonContent>
        </IonPage>
    );
};

export default Trending;