
   
                control={<Switch onChange={this.setMaior} />}
                label="Maior de idade"
              />
            </FormGroup>
            <TextField
              onChange={this.setPeso}
              margin="normal"
              required
              fullWidth
              id="peso"
              label="Peso"
              name="peso"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TextField
              onChange={this.setAltura}
              margin="normal"
              required
              fullWidth
              id="altura"
              label="Altura"
              name="altura"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">m</InputAdornment>,
              }}
            />
            <Typography component="h1" variant="h6">
              {this.resultado()}
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default function App() {
  return (
    <Imc />
  );
}
