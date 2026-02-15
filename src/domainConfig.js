export const getBranding = () => {
  const hostname = window.location.hostname;

  // Check which domain is being used
  // We use .includes() to handle both "www" and non-www versions
  if (hostname.includes("kambros.com")) {
    return {
      title: "Kambros",
      name: "KAMBROS",
      site: "kambros",
    };
  }

  return {
    title: "Ariz Group",
    name: "ARIZ GROUP",
    site: "arizg",
  };
};
