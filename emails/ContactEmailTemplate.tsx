import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
  message,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Nová zpráva od {name} z Rent|Back</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nová zpráva z kontaktního formuláře</Heading>
        <Text style={text}>
          Obdrželi jste novou zprávu přes kontaktní formulář na webu Rent|Back.
        </Text>

        <Section style={section}>
          <Text style={label}>Odesílatel:</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email:</Text>
          <Text style={value}>
            <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
          </Text>

          {phone && (
            <>
              <Text style={label}>Telefon:</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}
        </Section>

        <Hr style={hr} />

        <Section>
          <Text style={label}>Zpráva:</Text>
          <Text style={messageBox}>{message}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          Tento email byl vygenerován automaticky ze systému Rent|Back.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  marginBottom: "64px",
  borderRadius: "8px",
  border: "1px solid #e6ebf1",
};

const h1 = {
  color: "#1e3a8a", // RentBack blue
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  margin: "0 0 20px",
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const section = {
  margin: "24px 0",
};

const label = {
  color: "#8898aa",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px",
};

const value = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 16px",
};

const link = {
  color: "#1e3a8a",
  textDecoration: "underline",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  borderRadius: "4px",
  padding: "16px",
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "20px",
};
