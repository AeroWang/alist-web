import { Center, HStack, Text, Link, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link as ReactLink } from "react-router-dom";
import { IContext } from ".";
const Footer = () => {
  const { t } = useTranslation();
  const { getSetting } = useContext(IContext);
  return (
    <Center py="4">
      <VStack>
        <HStack spacing="2">
          <Link isExternal href="https://github.com/Xhofe/alist">
            {t("Powered by project", { project: "Alist" })}
          </Link>
          <span>|</span>
          <ReactLink to="/@manage">{t("Manage")}</ReactLink>
        </HStack>
        {getSetting("site beian") && (
          <Link isExternal href="https://beian.miit.gov.cn/">
            {getSetting("site beian")}
          </Link>
        )}
      </VStack>
    </Center>
  );
};

export default Footer;
