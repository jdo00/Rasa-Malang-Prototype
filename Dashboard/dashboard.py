


import streamlit as st
import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns
import streamlit as st
import pandas as pd
import json
import folium
from folium.plugins import HeatMap
from streamlit_folium import folium_static
from streamlit_folium import st_folium
import ast
from collections import Counter
from ast import literal_eval
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import json



print(plt.style.available)

def load_data(json_file_path):
    with open(json_file_path, 'r') as file:
        data = json.load(file)


    user_data_df = pd.DataFrame(data['user_data']['users'])
    restaurant_data_df = pd.DataFrame(data['restaurant_data'])
    tourist_destination_data_df = pd.DataFrame(data['tourist_destination_data'])
    itinerary_data_df = pd.DataFrame(data['itinerary_data'])

    return user_data_df, restaurant_data_df, tourist_destination_data_df, itinerary_data_df

def create_visualization(data):
    # Replace this with code to create visualizations based on the data
    fig, ax = plt.subplots()
    ax.plot([0, 1], [0, 1])  # Example plotting code
    return fig

def create_heatmap(df):
    # Convert 'Coordinates' from string to tuple of floats
    df['Coordinates'] = df['Coordinates'].apply(ast.literal_eval)
    df['Latitude'] = df['Coordinates'].apply(lambda x: x[0])
    df['Longitude'] = df['Coordinates'].apply(lambda x: x[1])

    # Create a map centered around the average coordinates
    avg_lat = df['Latitude'].mean()
    avg_lon = df['Longitude'].mean()
    map = folium.Map(location=[avg_lat, avg_lon], zoom_start=12)

  
    heat_data = [[row['Latitude'], row['Longitude'], row['Number of Visitors']] for index, row in df.iterrows()]

    # Adding the HeatMap layer to the map
    HeatMap(heat_data).add_to(map)
    return map


def main():
    st.set_page_config(layout="wide")
    st.title("Rasa Malang Data Analysis")

    # Load the data
    user_data, restaurant_data, tourist_data, itinerary_data = load_data("data.json")

    # Sidebar for navigation
    option = st.sidebar.selectbox(
        'Choose a category',
        ('User Data', 'Restaurant Data', 'Tourist Destination Data', 'Itinerary Data')
    )

    if option == 'User Data':
        st.header("User Demographics Analysis")
        plt.style.use('seaborn-v0_8-pastel')
 
        avg_age = user_data['Age'].mean()
        most_common_nationality = user_data['Nationality'].mode()[0]  # The mode method returns the most common value
        most_common_traveler_type = user_data['Traveler_Type'].mode()[0]

        # Display Statistics
        st.subheader("Key Statistics")
        col1, col2, col3 = st.columns(3)
        with col1:
            st.metric(label="Average Age", value=f"{avg_age:.2f}")  # Displaying average age with 2 decimal places
        with col2:
            st.metric(label="Most Common Nationality", value=most_common_nationality)
        with col3:
            st.metric(label="Most Common Traveler Type", value=most_common_traveler_type)

        col1, col2 = st.columns([1,1],gap='large')

        with col1:
            st.subheader("Age Distribution")
            user_data['Age'] = pd.to_numeric(user_data['Age'])
            plt.figure(figsize=(15, 8))
            sns.histplot(user_data, x='Age', kde=True, bins=30)
            plt.xlabel('Age')
            plt.ylabel('Count')
            st.pyplot(plt)

        with col2:
            st.subheader("Gender Distribution")
            gender_count = user_data['Gender'].value_counts()
            plt.figure(figsize=(2, 2))
            plt.pie(gender_count, labels=gender_count.index, autopct='%1.1f%%', startangle=140)
            plt.axis('equal')
            st.pyplot(plt)

    
        col3, col4 = st.columns(2)

        with col3:
            st.subheader("Nationality Distribution")
            plt.figure(figsize=(15, 10))
            sns.countplot(y='Nationality', data=user_data, order=user_data['Nationality'].value_counts().index)
            plt.xlabel('Count')
            plt.ylabel('Nationality')
            st.pyplot(plt)

        with col4:
            st.subheader("Traveler Type Distribution")
            traveler_type_count = user_data['Traveler_Type'].value_counts()
            plt.figure(figsize=(15, 10))
            sns.barplot(x=traveler_type_count.values, y=traveler_type_count.index)
            plt.xlabel('Count')
            plt.ylabel('Traveler Type')
            st.pyplot(plt)

            # Traveler Type Distribution
          
    elif option == 'Restaurant Data':
        df=restaurant_data
        st.header("Restaurant Data Analysis")
        st.header("Restaurant Visitors Heatmap")
        heatmap = create_heatmap(df)
        st_folium(heatmap, width=700, height=700)
        

        # Layout for other data
        st.header("Restaurant Data Overview")
        col1, col2 = st.columns(2)
        plt.style.use('seaborn-v0_8-pastel')
        with col1:
            with st.expander("Restaurants by Type"):
                restaurant_types_count = df['Restaurant Type'].value_counts()
                st.bar_chart(restaurant_types_count)

            with st.expander("Top Rated Restaurants"):
                top_rated = df.nlargest(5, 'AverageRating')
                st.write(top_rated[['Name', 'AverageRating']])

        with col2:
            with st.expander("Ratings Overview"):
                ratings = df['AverageRating']
                st.bar_chart(ratings)

            with st.expander("Most Reviewed Restaurants"):
                most_positive_reviews = df.nlargest(5, 'Positive Reviews')
                st.write(most_positive_reviews[['Name', 'Positive Reviews']])


    elif option == 'Tourist Destination Data':
        df=tourist_data
        st.title("Tourist Destination Data Analysis")
        highest_rated = df.groupby('Destination')['Rating'].mean().idxmax()
        busiest_day = pd.to_datetime(df['Date of Visit']).value_counts().idxmax().strftime('%Y-%m-%d')

 
       

        selected_destination = st.selectbox("Select a Tourist Destination", df['Destination'].unique())

    
        destination_data = df[df['Destination'] == selected_destination]

        # Displaying key statistics for the selected destination
        highest_rating = destination_data['Rating'].max()
        busiest_day = pd.to_datetime(destination_data['Date of Visit']).value_counts().idxmax().strftime('%Y-%m-%d')

        st.markdown(f"**Highest Rating for {selected_destination}:** {highest_rating}")
        st.markdown(f"**Busiest Day for {selected_destination}:** {busiest_day}")

        # 1. Visitor Demographics by Nationality
        st.subheader("Visitor Demographics by Nationality")
        nationality_distribution = destination_data['Nationality'].value_counts()
        st.bar_chart(nationality_distribution,color='#FFBD33')

        # 2. Visitor Distribution by Age
        st.subheader("Visitor Distribution by Age")
        age_distribution = destination_data['Age'].value_counts().sort_index()
        st.bar_chart(age_distribution,color="#c5fcfb")

        # 3. Visitor Ratings Distribution
        st.subheader("Visitor Ratings Distribution")
        ratings_distribution = destination_data['Rating'].value_counts().sort_index()
        st.bar_chart(ratings_distribution,color="#DBFF33")
        st.subheader(f"Visitor Count by Date for {selected_destination}")
        destination_data['Date of Visit'] = pd.to_datetime(destination_data['Date of Visit'])
        visitor_count_by_date = destination_data.groupby('Date of Visit').size()
        st.line_chart(visitor_count_by_date,color="#33FFBD")

    elif option == 'Itinerary Data':
        st.header("Itinerary Data Analysis")
        df=itinerary_data
        df['destinations_visited'] = df['destinations_visited'].apply(literal_eval)
        total_itineraries = len(df)
        most_visited_destination = Counter([dest for sublist in df['destinations_visited'] for dest in sublist]).most_common(1)[0][0]
        average_destinations_per_itinerary = df['destinations_visited'].apply(len).mean()

        col1, col2, col3 = st.columns(3)
        col1.metric("Total Itineraries", total_itineraries)
        col2.metric("Most Visited Destination", most_visited_destination)
        col3.metric("Average Destinations per Itinerary", f"{average_destinations_per_itinerary:.2f}")
        st.subheader("Frequency of Destinations Visited")
     
        destinations_counter = Counter([dest for sublist in df['destinations_visited'] for dest in sublist])
        st.bar_chart(pd.DataFrame(destinations_counter.items(), columns=['Destination', 'Count']).set_index('Destination'))

    
      


if __name__ == "__main__":
    main()
