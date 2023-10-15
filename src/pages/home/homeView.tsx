import MainLayout from "../../layout/mainLayout";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


const HomeView = () => {
	return (
		<MainLayout>
			<div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-5">
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Item  sx={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none', boxShadow:'none'}}>
								{/* ITEM STATUS */}
								<Box
									sx={{
										width: 'full',
										height: 600,
										backgroundColor: 'primary.dark',
										'&:hover': {
											backgroundColor: 'primary.main',
											opacity: [0.9, 0.8, 0.7],
										},
									}}
								/>
							</Item>
						</Grid>
						{/* ITEM BUTTON UTAMA */}
						<Grid item xs={4}>
							<Item sx={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none', boxShadow:'none'}}>
								<Grid
									container
									direction="column"
									justifyContent="center"
									alignItems="center"
									sx={{ width: '100%', height: '100%' }}
								>
									<Grid item xs={4} sx={{ width: '100%', height: '25%' }}>
										<Item>
											<Box
												sx={{
													width: 'full',
													height: 170,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												Button ON/OFF
											</Box>
										</Item>
									</Grid>
									<Grid item xs={4} sx={{ width: '100%', height: '25%' }}>
										<Item>
											<Box
												sx={{
													width: 'full',
													height: 170,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												Status Mesin
											</Box>
										</Item>
									</Grid>
									<Grid item xs={4} sx={{ width: '100%', height: '25%' }}>
										<Item>
											<Container maxWidth="sm">
												<Box
													sx={{
														width: 'full',
														height: 170,
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
													}}
												>
													Status Device
												</Box>
											</Container>
										</Item>
									</Grid>
								</Grid>
							</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>xs=4</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>xs=4</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>xs=4</Item>
						</Grid>
					</Grid>
				</Box>
			</div>
		</MainLayout>
	);
};

export default HomeView;
