import Box from '@mui/material/Box';

export default function BoxSx({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: 5,
        textAlign: 'center',
        margin: 'auto',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 500,
        maxHeight: 300,
        backgroundImage: 'linear-gradient(90deg,#262626,#232967,#2936c7,#7586e1)',
        backgroundSize: "400% 400%;",
          animation: "gradient 15s ease infinite;",
        borderRadius: 8,
        '&:hover': {
          backgroundImage: 'linear-gradient(90deg,#81a9e3,#06153d);',
        },
      }}
    >
      {children}
    </Box>
  );
};

