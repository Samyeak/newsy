import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const SmallHeader = ({title}) => {
	return (
		<IonHeader collapse="condense">
			<IonToolbar color="primary">
				<IonTitle>{"Small " + title || "Title"}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default SmallHeader;