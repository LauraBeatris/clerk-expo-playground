import { SignedIn, SignedOut, useUser, useOAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import * as Linking from "expo-linking";

export default function Page() {
  const { user } = useUser();
  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const handleSSO = () => {
    startOAuthFlow({
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
