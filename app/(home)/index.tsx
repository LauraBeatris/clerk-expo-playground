import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { useSSO } from "@/hooks/useSSO";

export default function Page() {
  const { user } = useUser();
  const { startFlow } = useSSO();

  console.log(Linking.createURL("dashboard"));

  const handleSSO = () => {
    startFlow({
      redirectUrl: Linking.createURL("dashboard"),
    });
  };

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Button title="Sign in with SSO" onPress={handleSSO} />
      </SignedOut>
    </View>
  );
}
