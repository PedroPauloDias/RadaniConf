import React from "react";
import { auth } from "../../auth";
import Logout from "../../components/Logout";
//import { Button } from "@nextui-org/react";
import { Button } from '@nextui-org/button';

const Dash = async () => {
const session = await auth();
  return (
    <>
      {session ? (
        <div className="flex flex-col items-center m-4">
          <h1>{session?.user?.name}</h1>
          <h1>{session?.user?.email}</h1>
          <div className="flex gap-4">
            <Button variant="bordered" radius="md">
              Button
            </Button>
            <Button isDisabled color="primary" radius="md">
              Disabled
            </Button>
          </div>

          <Logout />
        </div>
      ) : (
        <div><p>O usuario nao esta logado</p></div>
      )}

    </>
  );
};

export default Dash;
