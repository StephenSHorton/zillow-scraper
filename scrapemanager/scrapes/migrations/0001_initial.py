# Generated by Django 3.0.8 on 2020-07-20 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Scrape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100, unique=True)),
                ('type', models.CharField(blank=True, max_length=15)),
                ('bedrooms', models.CharField(blank=True, max_length=15)),
                ('yearbuilt', models.CharField(blank=True, max_length=15)),
                ('squarefeet', models.CharField(blank=True, max_length=15)),
                ('parking', models.CharField(blank=True, max_length=15)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
