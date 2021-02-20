import { Button, Box, Flex, useClipboard, Spacer } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button variant="solid" bg="brand.red" w="3.5rem" size="xs" borderRadius="md" color="white" mt="3" _hover={{ bg: "brand.red100" }} onClick={onCopy}>
      {hasCopied ? "COPIED" : "COPY"}
    </Button>
  );
};

const MDXCode = ({ children, className }) => {
  const language = className.replace(/language-/, "");
  return (
    <Box>
      <Flex>
        <Spacer />
        <CopyButton value={children.trim()} />
      </Flex>
      <Highlight {...defaultProps} theme={nightOwl} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, fontSize: "0.8rem", overflow: "scroll", whiteSpace: "pre", background: "none", marginBottom: 0, padding: 0 }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default MDXCode;
