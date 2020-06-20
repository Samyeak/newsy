import React from "react";
import {
	IonPage,
	IonContent,
	IonItem,
	IonLabel,
	IonInput,
	IonRow,
	IonCol,
	IonButton,
    IonRouterLink,
} from "@ionic/react";
import NavHeader from "../../components/Headers/NavHeader";

const Forgot = () => {
	const title = "Password Reset";
	return (
		<IonPage>
			<NavHeader title={title} />
			<IonContent>
				<IonItem lines="full">
					<IonLabel position="floating">Email</IonLabel>
					<IonInput name="email" type="text" required></IonInput>
				</IonItem>
				<IonRow>
					<IonCol>
						<IonButton type="submit" color="primary" expand="block">
							Get Reset Link
						</IonButton>
					</IonCol>
				</IonRow>
                <IonRow>
					<IonCol class="ion-text-center ion-padding-vertical">
						<IonRouterLink routerLink={"/login"}>
                            Back to Login
                        </IonRouterLink>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Forgot;